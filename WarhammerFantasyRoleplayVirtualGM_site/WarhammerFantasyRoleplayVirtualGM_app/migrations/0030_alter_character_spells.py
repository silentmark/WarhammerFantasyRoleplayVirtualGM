# Generated by Django 3.2.19 on 2023-10-07 18:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('WarhammerFantasyRoleplayVirtualGM_app', '0029_character_wealth'),
    ]

    operations = [
        migrations.AlterField(
            model_name='character',
            name='spells',
            field=models.ManyToManyField(blank=True, null=True, to='WarhammerFantasyRoleplayVirtualGM_app.Spells', verbose_name='Spells'),
        ),
    ]
