from fastapi import APIRouter, HTTPException
from app.services.llm_service import get_tarot_reading
from app.schemas.tarot_schemas import TarotReadingRequest, TarotReadingResponse

router = APIRouter()

@router.post("/read", response_model=TarotReadingResponse)
async def create_tarot_reading(request: TarotReadingRequest):
    try:
        reading_text = await get_tarot_reading(request)
        return TarotReadingResponse(reading=reading_text)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) 