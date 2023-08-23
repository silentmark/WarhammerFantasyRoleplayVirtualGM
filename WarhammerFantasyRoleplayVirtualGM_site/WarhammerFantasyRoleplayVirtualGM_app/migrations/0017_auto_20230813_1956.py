# Generated by Django 3.2.19 on 2023-08-13 17:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('WarhammerFantasyRoleplayVirtualGM_app', '0016_character_wounds'),
    ]

    operations = [
        migrations.AlterField(
            model_name='character',
            name='name',
            field=models.CharField(max_length=50, verbose_name='Character name'),
        ),
        migrations.AlterField(
            model_name='character',
            name='resilience_motivation',
            field=models.CharField(max_length=50, verbose_name='Character Motivation'),
        ),
    ]