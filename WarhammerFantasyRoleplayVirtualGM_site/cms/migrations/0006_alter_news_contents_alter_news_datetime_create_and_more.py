# Generated by Django 5.1 on 2024-08-21 15:59

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0005_rename_yt_id_news_internal_id_news_is_yt'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news',
            name='contents',
            field=models.TextField(blank=True, default='', null=True, verbose_name='content'),
        ),
        migrations.AlterField(
            model_name='news',
            name='datetime_create',
            field=models.DateTimeField(default=datetime.datetime(2024, 8, 21, 17, 59, 43, 345933), verbose_name='Create Time'),
        ),
        migrations.AlterField(
            model_name='news',
            name='is_yt',
            field=models.BooleanField(blank=True, default=False, max_length=50, null=True),
        ),
    ]
