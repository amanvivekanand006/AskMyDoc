from fastapi import FastAPI
from apis import *
from fastapi.middleware.cors import CORSMiddleware

app= FastAPI()


from apis.file import api_router as file_router
from apis.chatbot import api_router as chat_router
from apis.user import api_router as user_router
from apis.feedback import api_router as feedback_router



app.include_router(file_router)
app.include_router(chat_router)
app.include_router(user_router)
app.include_router(feedback_router)

origins = [
    "http://localhost:5173", 
    "https://docu-intel-assignment-nxd6.vercel.app",
        "http://localhost:5173",  # for local development
        "http://localhost:3000",  # for local development
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True, 
    allow_methods=["*"],  
    allow_headers=["*"], 
    expose_headers=["*"]
)