# Generated by Django 3.1.5 on 2021-03-15 19:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('SocialBookApp', '0005_auto_20210314_1834'),
    ]

    operations = [
        migrations.AddField(
            model_name='profiletxtpost',
            name='dp',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='profiletxtpost',
            name='header',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='profiletxtpost',
            name='related',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='profiletxtpost',
            name='types',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='profiletxtpost',
            name='url',
            field=models.CharField(max_length=200, null=True),
        ),
    ]
