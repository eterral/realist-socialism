from rest_framework import viewsets, status, generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticatedOrReadOnly
from django.contrib.auth.models import User
from .serializers import FilmSerializer, PosterSerializer, UserSerializer
from .models import Film, Poster


# Create your views here.

class FilmViewSet(viewsets.ModelViewSet):
    queryset = Film.objects.all()
    serializer_class = FilmSerializer
    # permission_classes = (AllowAny,)
    permission_classes = (IsAuthenticatedOrReadOnly,)

class PosterViewSet(viewsets.ModelViewSet):
    queryset = Poster.objects.all()
    serializer_class = PosterSerializer
    # permission_classes = (AllowAny,)
    permission_classes = (IsAuthenticatedOrReadOnly,)

class UserCreate(generics.CreateAPIView):
	queryset = User.objects.all()
	serializer_class = UserSerializer
	permission_classes = (AllowAny,)