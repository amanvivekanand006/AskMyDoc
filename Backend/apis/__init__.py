from fastapi import FastAPI,UploadFile, File, HTTPException,Body,status,Depends
from fastapi.routing import APIRouter
from motor.motor_asyncio import AsyncIOMotorClient
from motor.motor_asyncio import AsyncIOMotorGridFSBucket
from bson import ObjectId
from dotenv import load_dotenv
from pydantic import BaseModel,EmailStr,validator,ValidationError,Field
from typing import Optional ,List,Dict
from passlib.context import CryptContext
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from datetime import datetime, timedelta
import re
import random
import os
import tempfile
from io import BytesIO
from langchain_core.documents import Document
from pinecone import Pinecone
from langchain_text_splitters import RecursiveCharacterTextSplitter
# from langchain_google_genai import (
#     GoogleGenerativeAIEmbeddings,
#     ChatGoogleGenerativeAI
# )
from langchain_huggingface import HuggingFaceEmbeddings
import requests
from langchain_pinecone import PineconeVectorStore
from langchain_core.prompts import PromptTemplate
# from google import genai

api_router = APIRouter()





# from pymongo import MongoClient
# from fastapi.responses import StreamingResponse
# import phonenumbers
# from fastapi.middleware.cors import CORSMiddleware
# from unstructured.partition.auto import partition
# from unstructured.partition.pdf import partition_pdf
# from unstructured.partition.docx import partition_docx
# from unstructured.partition.text import partition_text
# from langchain.vectorstores import FAISS
# from langchain.schema import Document
# from langchain_community.document_loaders import PyPDFLoader
# from langchain_text_splitters import RecursiveCharacterTextSplitter