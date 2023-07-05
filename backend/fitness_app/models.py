from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class App_user(AbstractUser):
    email = models.EmailField(blank = False, null = False, unique = True)
    # Assigns email as username
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []
    
    def __str__(self):
        return f"{self.first_name} {self.last_name} | {self.email}"
    
class Exercises(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=255)
    muscle = models.CharField(max_length=255)
    description = models.TextField()

class Routines(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=255)
    user = models.ForeignKey('Users', on_delete=models.CASCADE)
    type = models.CharField(max_length=255)

class RoutineExercises(models.Model):
    workout = models.ForeignKey('Routines', on_delete=models.CASCADE)
    routine = models.ForeignKey('Exercises', on_delete=models.CASCADE)
    reps = models.IntegerField(null=True)
    rest_duration = models.IntegerField()
    sets = models.IntegerField()
    weight = models.IntegerField(null=True)

class Users(models.Model):
    id = models.BigAutoField(primary_key=True)