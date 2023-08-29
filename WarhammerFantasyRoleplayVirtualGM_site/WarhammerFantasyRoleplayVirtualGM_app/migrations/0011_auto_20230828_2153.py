# Generated by Django 3.2.19 on 2023-08-28 19:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('WarhammerFantasyRoleplayVirtualGM_app', '0010_alter_status_unique_together'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='careerpath',
            name='earning_money',
        ),
        migrations.AlterField(
            model_name='status',
            name='tier',
            field=models.CharField(choices=[('NONE', 'NONE'), ('Brass', 'Brass'), ('Silver', 'Silver'), ('Gold', 'Gold')], default='NONE', max_length=6, verbose_name='Tier'),
        ),
    ]
