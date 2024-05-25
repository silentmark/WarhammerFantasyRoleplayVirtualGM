# Generated by Django 5.0.6 on 2024-05-25 18:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('WarhammerFantasyRoleplayVirtualGM_NPC', '0002_rename_character_npc'),
    ]

    operations = [
        migrations.AddField(
            model_name='npc',
            name='characteristics_ag',
            field=models.IntegerField(default='0', verbose_name='ag'),
        ),
        migrations.AddField(
            model_name='npc',
            name='characteristics_bs',
            field=models.IntegerField(default='0', verbose_name='bs'),
        ),
        migrations.AddField(
            model_name='npc',
            name='characteristics_dex',
            field=models.IntegerField(default='0', verbose_name='dex'),
        ),
        migrations.AddField(
            model_name='npc',
            name='characteristics_fel',
            field=models.IntegerField(default='0', verbose_name='fel'),
        ),
        migrations.AddField(
            model_name='npc',
            name='characteristics_i',
            field=models.IntegerField(default='0', verbose_name='i'),
        ),
        migrations.AddField(
            model_name='npc',
            name='characteristics_int',
            field=models.IntegerField(default='0', verbose_name='int'),
        ),
        migrations.AddField(
            model_name='npc',
            name='characteristics_s',
            field=models.IntegerField(default='0', verbose_name='s'),
        ),
        migrations.AddField(
            model_name='npc',
            name='characteristics_t',
            field=models.IntegerField(default='0', verbose_name='t'),
        ),
        migrations.AddField(
            model_name='npc',
            name='characteristics_wp',
            field=models.IntegerField(default='0', verbose_name='wp'),
        ),
        migrations.AddField(
            model_name='npc',
            name='characteristics_ws',
            field=models.IntegerField(default='0', verbose_name='ws'),
        ),
        migrations.AddField(
            model_name='npc',
            name='portrait',
            field=models.ImageField(null=True, upload_to='images/'),
        ),
    ]
