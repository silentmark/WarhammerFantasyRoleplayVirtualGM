# Generated by Django 3.2.19 on 2023-08-28 19:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('WarhammerFantasyRoleplayVirtualGM_app', '0009_auto_20230828_2123'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='status',
            unique_together={('tier', 'level')},
        ),
    ]
