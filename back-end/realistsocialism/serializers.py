from rest_framework import serializers
from .models import Film, Poster
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password

class FilmSerializer(serializers.HyperlinkedModelSerializer):
	posters = serializers.StringRelatedField(many=True)
	class Meta:
		model = Film
		fields = ['title', 'title_en', 'nationality', 'description', 'posters']

class PosterSerializer(serializers.HyperlinkedModelSerializer):

	class Meta:
		model = Poster
		fields = ['title', 'year', 'artist', 'author']

class UserSerializer(serializers.ModelSerializer):
	username = serializers.CharField(required=True, validators=[UniqueValidator(queryset=User.objects.all())])
	password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
	password2 = serializers.CharField(write_only=True, required=True)

	class Meta:
	    model = User
	    fields = ('username', 'password', 'password2')

	def validate(self, attrs):
	    if attrs['password'] != attrs['password2']:
	        raise serializers.ValidationError({"password": "Password fields didn't match."})
	    return attrs

	def create(self, validated_data):
	    user = User.objects.create(
	        username=validated_data['username'],
	    )

	    user.set_password(validated_data['password'])
	    user.save()
	    return user