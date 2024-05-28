# Generated by Django 5.0.6 on 2024-05-28 17:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('WarhammerFantasyRoleplayVirtualGM_NPC', '0015_npc2creaturetraits_npc_creaturetraits'),
    ]

    operations = [
        migrations.AlterField(
            model_name='npc',
            name='name',
            field=models.CharField(max_length=150, verbose_name='Name'),
        ),
        migrations.AlterField(
            model_name='npc',
            name='portrait',
            field=models.ImageField(default='static/page_images/default.png', null=True, upload_to='npc'),
        ),
        migrations.AlterField(
            model_name='npc2creaturetraits',
            name='amount',
            field=models.CharField(max_length=150, verbose_name='Value'),
        ),
        migrations.AlterField(
            model_name='npc2skill',
            name='value',
            field=models.CharField(max_length=150, verbose_name='Value'),
        ),
        migrations.AlterField(
            model_name='npc2talent',
            name='value',
            field=models.CharField(max_length=150, verbose_name='Value'),
        ),
    ]
