# Generated by Django 5.1 on 2024-09-09 19:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('WarhammerFantasyRoleplayVirtualGM_Adventure', '0005_remove_adventure2npc_condition_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='adventure2npc',
            name='name',
            field=models.CharField(default='', max_length=250),
        ),
    ]
