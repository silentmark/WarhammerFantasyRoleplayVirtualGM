# Generated by Django 3.2.19 on 2023-08-15 14:22

from django.db import migrations, models
import django.db.models.deletion

from WarhammerFantasyRoleplayVirtualGM_app.models import Career, CareerPath, CareersAdvanceScheme

def add_AdvanceScheme(apps, schema_editor):
    car_all = Career.objects.all()
    for car in car_all:
        c1 = CareerPath(name="{} - CareerPath 1".format(car.name))
        c1.save()
        c2 = CareerPath(name="{} - CareerPath 2".format(car.name))
        c2.save()
        c3 = CareerPath(name="{} - CareerPath 3".format(car.name))
        c3.save()
        c4 = CareerPath(name="{} - CareerPath 4".format(car.name))
        c4.save()
        cas = CareersAdvanceScheme(advances_level_1=c1, advances_level_2=c2, advances_level_3=c3, advances_level_4=c4, career=car)
        cas.save()


class Migration(migrations.Migration):

    dependencies = [
        ('WarhammerFantasyRoleplayVirtualGM_app', '0026_talent_ref'),
    ]

    operations = [
        migrations.RunPython(add_AdvanceScheme),
    ]