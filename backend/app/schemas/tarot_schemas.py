from pydantic import BaseModel
from typing import List, Optional

class CardInfo(BaseModel):
    name: str
    enName: str
    reversed: bool

class TarotReadingRequest(BaseModel):
    question: str
    spreadId: str
    lang: str
    cards: List[CardInfo]

class TarotReadingResponse(BaseModel):
    reading: str 