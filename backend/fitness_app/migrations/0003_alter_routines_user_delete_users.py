# Generated by Django 4.2.2 on 2023-07-05 20:12

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('fitness_app', '0002_exercises_users_routines_routineexercises'),
    ]

    operations = [
        migrations.AlterField(
            model_name='routines',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.DeleteModel(
            name='Users',
        ),
    ]
