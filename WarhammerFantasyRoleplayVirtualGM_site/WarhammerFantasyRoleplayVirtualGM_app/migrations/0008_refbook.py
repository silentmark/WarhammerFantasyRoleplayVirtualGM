# Generated by Django 3.2.19 on 2023-08-07 19:26

from django.db import migrations, models

from WarhammerFantasyRoleplayVirtualGM_app.models import RefBook

def add_ref_book(apps, schema_editor):
    data = [
        "Adventure Afoot in the Reikland",
        "Altdorf: Crown of the Empire",
        "Archives of the Empire II",
        "Archives of the Empire III",
        "Archives of the Empire Volume 1",
        "Blood and Brambl",
        "Buildings of the Reikland",
        "Death on the Reik (Part 2 of the Enemy Within Campaign)",
        "Death on the Reik Companion",
        "Enemy in Shadows (Part 1 of the Enemy Within Campaign)",
        "Enemy in Shadows Companion",
        "Gamemaster's Screen and Gamemaster's Guide",
        "Hirelings of the Old World",
        "It's Your Funeral",
        "Middenheim: City of the White Wolf",
        "Monuments of the Reikland",
        "Old World Adventures: Between Skarok and a Hard Place",
        "Old World Adventures: Feast of Blood",
        "Old World Adventures: Hell Rides to Hallt",
        "Old World Adventures: Night of Blood",
        "Old World Adventures: Skeleton Crew",
        "Old World Adventures: The Spirit of Mondstille",
        "One Shots of the Reikland",
        "Patrons of the Old World",
        "Power Behind the Throne (Part 3 of the Enemy Within Campaign)",
        "Power Behind the Throne Companion",
        "Rough Nights & Hard Days",
        "Salzenmund: City of Salt and Silver",
        "Sea of Claws",
        "Shrines of Sigmar",
        "The Cluster-Eye Tribe",
        "The Emperor's Wrath",
        "The Empire in Ruins (Part 5 of the Enemy Within Campaign)",
        "The Empire in Ruins Companion",
        "The Horned Rat (Part 4 of the Enemy Within Campaign)",
        "The Horned Rat Companion",
        "The Imperial Zoo",
        "The Night Parade",
        "Ubersreik Adventures",
        "Ubersreik Adventures II: Deadly Dispatch",
        "Ubersreik Adventures II: Double Trouble",
        "Ubersreik Adventures II: Fishrook Returns",
        "Ubersreik Adventures II: Grey Mountain Gold",
        "Ubersreik Adventures II: The Blessing that Drew Blood",
        "Ubersreik Adventures: Bait and Witch",
        "Ubersreik Adventures: Heart of Glass",
        "Ubersreik Adventures: If Looks Could Kill",
        "Ubersreik Adventures: No Strings Attached",
        "Ubersreik Adventures: Slaughter in Spittlefeld",
        "Ubersreik Adventures: The Guilty Party",
        "Ubersreik Adventures: The Mad Men of Gotheim",
        "Up in Arms",
        "Warhammer Fantasy Roleplay: Starter set ",
        "Warhammer FRP Core Rulebook 4th Edition ENG",
        "Winds of Magic",
    ]

    for title in data:
        refBook = RefBook(name = title)
        refBook.save()

class Migration(migrations.Migration):

    dependencies = [
        ('WarhammerFantasyRoleplayVirtualGM_app', '0007_auto_20230805_2039'),
    ]

    operations = [
        migrations.CreateModel(
            name='RefBook',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
            ],
        ),
        migrations.RunPython(add_ref_book),
    ]
