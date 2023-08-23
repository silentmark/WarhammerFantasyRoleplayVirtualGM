# Generated by Django 3.2.19 on 2023-08-20 09:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('WarhammerFantasyRoleplayVirtualGM_app', '0037_remove_careerpath_careerpath_descendants'),
    ]

    operations = [
        migrations.AddField(
            model_name='skils',
            name='skils_parent',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='WarhammerFantasyRoleplayVirtualGM_app.skils'),
        ),
        migrations.AddField(
            model_name='talent',
            name='talent_parent',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='WarhammerFantasyRoleplayVirtualGM_app.talent'),
        ),
    ]