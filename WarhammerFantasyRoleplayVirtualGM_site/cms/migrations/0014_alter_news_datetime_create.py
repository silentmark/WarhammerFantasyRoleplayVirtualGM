# Generated by Django 5.1 on 2024-09-09 19:13

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0013_alter_news_datetime_create'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news',
            name='datetime_create',
            field=models.DateTimeField(default=datetime.datetime(2024, 9, 9, 21, 13, 3, 321621), verbose_name='Create Time'),
        ),
    ]
