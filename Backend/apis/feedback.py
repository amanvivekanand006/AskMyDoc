from . import *
from . database import *


class feedback(BaseModel):
    rating:str
    review:str

@api_router.post("/feedback", tags=["Feedback"])
async def save_users_feedback(user_id:str,feedback_schema:feedback):

    document = {
        "user_id" : user_id,
        "rating" : feedback_schema.rating,
        "feedback": feedback_schema.review,
        "created_at":datetime.now(ZoneInfo("Asia/Kolkata"))
    }

    result = await users_feedback.insert_one(document)

    return { 
        "message" : "Feedback Received!"
    }

