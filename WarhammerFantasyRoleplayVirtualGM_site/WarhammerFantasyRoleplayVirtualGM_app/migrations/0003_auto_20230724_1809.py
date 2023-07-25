# Generated by Django 3.2.19 on 2023-07-24 16:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('WarhammerFantasyRoleplayVirtualGM_app', '0002_campaign_career_careerpath_character_characterclass_eyes_hair_species_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='character',
            name='characteristics_ag_advances',
            field=models.IntegerField(default='0', verbose_name='ag_advances'),
        ),
        migrations.AddField(
            model_name='character',
            name='characteristics_ag_initial',
            field=models.IntegerField(default='0', verbose_name='ag_initial'),
        ),
        migrations.AddField(
            model_name='character',
            name='characteristics_bs_advances',
            field=models.IntegerField(default='0', verbose_name='bs_advances'),
        ),
        migrations.AddField(
            model_name='character',
            name='characteristics_bs_initial',
            field=models.IntegerField(default='0', verbose_name='bs_initial'),
        ),
        migrations.AddField(
            model_name='character',
            name='characteristics_dex_advances',
            field=models.IntegerField(default='0', verbose_name='dex_advances'),
        ),
        migrations.AddField(
            model_name='character',
            name='characteristics_dex_initial',
            field=models.IntegerField(default='0', verbose_name='dex_initial'),
        ),
        migrations.AddField(
            model_name='character',
            name='characteristics_fel_advances',
            field=models.IntegerField(default='0', verbose_name='fel_advances'),
        ),
        migrations.AddField(
            model_name='character',
            name='characteristics_fel_initial',
            field=models.IntegerField(default='0', verbose_name='fel_initial'),
        ),
        migrations.AddField(
            model_name='character',
            name='characteristics_i_advances',
            field=models.IntegerField(default='0', verbose_name='i_advances'),
        ),
        migrations.AddField(
            model_name='character',
            name='characteristics_i_initial',
            field=models.IntegerField(default='0', verbose_name='i_initial'),
        ),
        migrations.AddField(
            model_name='character',
            name='characteristics_int_advances',
            field=models.IntegerField(default='0', verbose_name='int_advances'),
        ),
        migrations.AddField(
            model_name='character',
            name='characteristics_int_initial',
            field=models.IntegerField(default='0', verbose_name='int_initial'),
        ),
        migrations.AddField(
            model_name='character',
            name='characteristics_s_advances',
            field=models.IntegerField(default='0', verbose_name='s_advances'),
        ),
        migrations.AddField(
            model_name='character',
            name='characteristics_s_initial',
            field=models.IntegerField(default='0', verbose_name='s_initial'),
        ),
        migrations.AddField(
            model_name='character',
            name='characteristics_t_advances',
            field=models.IntegerField(default='0', verbose_name='t_advances'),
        ),
        migrations.AddField(
            model_name='character',
            name='characteristics_t_initial',
            field=models.IntegerField(default='0', verbose_name='t_initial'),
        ),
        migrations.AddField(
            model_name='character',
            name='characteristics_wp_advances',
            field=models.IntegerField(default='0', verbose_name='wp_advances'),
        ),
        migrations.AddField(
            model_name='character',
            name='characteristics_wp_initial',
            field=models.IntegerField(default='0', verbose_name='wp_initial'),
        ),
        migrations.AddField(
            model_name='character',
            name='characteristics_ws_advances',
            field=models.IntegerField(default='0', verbose_name='ws_advances'),
        ),
        migrations.AddField(
            model_name='character',
            name='characteristics_ws_initial',
            field=models.IntegerField(default='0', verbose_name='ws_initial'),
        ),
    ]
