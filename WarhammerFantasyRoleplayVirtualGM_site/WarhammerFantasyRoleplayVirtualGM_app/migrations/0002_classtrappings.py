# Generated by Django 3.2.19 on 2023-08-27 17:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('WarhammerFantasyRoleplayVirtualGM_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ClassTrappings',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ch_class', models.ForeignKey(default='1', on_delete=django.db.models.deletion.CASCADE, to='WarhammerFantasyRoleplayVirtualGM_app.class', verbose_name='Class')),
                ('trapping', models.ForeignKey(default='1', on_delete=django.db.models.deletion.CASCADE, to='WarhammerFantasyRoleplayVirtualGM_app.trapping', verbose_name='Trapping')),
            ],
        ),
    ]
