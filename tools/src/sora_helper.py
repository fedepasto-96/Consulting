"""SORA / risk-assessment bookkeeping helpers.

Aids for drone Specific-category risk work and general 5x5 risk scoring.

IMPORTANT
---------
This encodes the **SORA 2.0** SAIL determination table for convenience. It is a
bookkeeping aid only and is NOT a substitute for the official, current JARUS/EASA
methodology. Always confirm the applicable SORA version and validate every result
against the published tables before using it in a deliverable.

Run `python sora_helper.py` for a self-check.
"""

from __future__ import annotations

from dataclasses import dataclass

# SORA 2.0 SAIL determination: SAIL[final_GRC][residual_ARC]
# Columns: residual Air Risk Class a-d. Rows keyed by final Ground Risk Class.
# A final GRC > 7 is not supported by SORA (-> Certified category).
_SAIL_TABLE: dict[int, dict[str, str]] = {
    1: {"a": "I", "b": "II", "c": "IV", "d": "VI"},
    2: {"a": "I", "b": "II", "c": "IV", "d": "VI"},
    3: {"a": "II", "b": "II", "c": "IV", "d": "VI"},
    4: {"a": "III", "b": "III", "c": "IV", "d": "VI"},
    5: {"a": "IV", "b": "IV", "c": "IV", "d": "VI"},
    6: {"a": "V", "b": "V", "c": "V", "d": "VI"},
    7: {"a": "VI", "b": "VI", "c": "VI", "d": "VI"},
}


def sail(final_grc: int, residual_arc: str) -> str:
    """Return the SORA SAIL ('I'..'VI') for a final GRC and residual ARC.

    Args:
        final_grc: Final Ground Risk Class after mitigations (1-7).
        residual_arc: Residual Air Risk Class, one of 'a', 'b', 'c', 'd'.

    Raises:
        ValueError: if inputs are out of range / GRC not supported by SORA.
    """
    arc = residual_arc.strip().lower()
    if arc not in {"a", "b", "c", "d"}:
        raise ValueError(f"residual_arc must be a/b/c/d, got {residual_arc!r}")
    if final_grc < 1:
        raise ValueError("final_grc must be >= 1")
    if final_grc > 7:
        raise ValueError(
            "final GRC > 7 is not supported by SORA; the operation falls in the "
            "Certified category."
        )
    return _SAIL_TABLE[final_grc][arc]


# --- General 5x5 risk scoring -------------------------------------------------

_BANDS = (
    (4, "Low"),
    (9, "Medium"),
    (16, "High"),
    (25, "Extreme"),
)


@dataclass(frozen=True)
class RiskScore:
    likelihood: int
    consequence: int

    @property
    def score(self) -> int:
        return self.likelihood * self.consequence

    @property
    def band(self) -> str:
        return risk_band(self.score)


def risk_band(score: int) -> str:
    """Map a 1-25 risk score to a band (Low/Medium/High/Extreme)."""
    if not 1 <= score <= 25:
        raise ValueError("score must be between 1 and 25")
    for upper, label in _BANDS:
        if score <= upper:
            return label
    return "Extreme"  # unreachable


def score(likelihood: int, consequence: int) -> RiskScore:
    """Build a RiskScore from 1-5 likelihood and 1-5 consequence."""
    for name, val in (("likelihood", likelihood), ("consequence", consequence)):
        if not 1 <= val <= 5:
            raise ValueError(f"{name} must be between 1 and 5, got {val}")
    return RiskScore(likelihood, consequence)


def _self_check() -> None:
    assert sail(1, "a") == "I"
    assert sail(7, "d") == "VI"
    assert sail(4, "c") == "IV"
    assert score(5, 4).band == "Extreme"
    assert score(1, 1).band == "Low"
    assert risk_band(9) == "Medium"
    print("sora_helper self-check passed.")
    print("Example: final GRC 4, residual ARC c ->", sail(4, "c"))
    print("Example: L=4 C=3 ->", score(4, 3).score, score(4, 3).band)


if __name__ == "__main__":
    _self_check()
