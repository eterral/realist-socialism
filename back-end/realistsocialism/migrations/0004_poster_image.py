# Generated by Django 4.0.1 on 2022-01-26 21:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('realistsocialism', '0003_alter_film_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='poster',
            name='image',
            field=models.ImageField(default='none', upload_to=''),
        ),
    ]
