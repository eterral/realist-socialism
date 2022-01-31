from rest_framework import viewsets, status, generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticatedOrReadOnly, BasePermission
from django.contrib.auth.models import User
from .serializers import FilmSerializer, PosterSerializer, UserSerializer
from .models import Film, Poster


# Create your views here.

class FilmViewSet(viewsets.ModelViewSet):
    queryset = Film.objects.all()
    serializer_class = FilmSerializer
    # authentication_classes = []
    permission_classes = (BasePermission,)

class PosterViewSet(viewsets.ModelViewSet):
    queryset = Poster.objects.all()
    serializer_class = PosterSerializer
    # authentication_classes = []
    permission_classes = (BasePermission,)

class UserCreate(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)
