from django.db import models

# Create your models here.
class Film(models.Model):
    title = models.CharField(max_length=128)
    title_en = models.CharField(max_length=128)
    nationality = models.CharField(max_length=128)
    description = models.CharField(max_length=256)

    def __str__(self):
	    return self.title

class Poster(models.Model):
    title = models.CharField(max_length=128)
    year = models.IntegerField
    artist = models.CharField(max_length=128)
    film = models.ForeignKey(Film, on_delete=models.CASCADE, related_name='posters')

    def __str__(self):
	    return self.title