# Generated by Django 3.2.19 on 2023-08-28 18:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('WarhammerFantasyRoleplayVirtualGM_app', '0007_auto_20230828_2053'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='trapping',
            name='is_basic_skill',
        ),
        migrations.RemoveField(
            model_name='trapping',
            name='is_career_skill',
        ),
        migrations.RemoveField(
            model_name='trapping',
            name='is_species_skill',
        ),
        migrations.AddField(
            model_name='character2trappingl',
            name='is_basic_skill',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='character2trappingl',
            name='is_career_skill',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='character2trappingl',
            name='is_species_skill',
            field=models.BooleanField(default=False),
        ),
    ]