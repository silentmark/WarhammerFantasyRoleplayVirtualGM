# Generated by Django 3.2.19 on 2023-09-18 17:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('WarhammerFantasyRoleplayVirtualGM_app', '0023_auto_20230911_2003'),
    ]

    operations = [
        migrations.AddField(
            model_name='character',
            name='campaign',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='WarhammerFantasyRoleplayVirtualGM_app.campaign', verbose_name='Campaign'),
        ),
    ]
