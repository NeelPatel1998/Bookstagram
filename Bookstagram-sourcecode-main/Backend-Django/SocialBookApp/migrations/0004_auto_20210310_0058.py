# Generated by Django 3.1.5 on 2021-03-09 19:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('SocialBookApp', '0003_bookcomments_ratings'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bookcomments',
            name='ratings',
            field=models.FloatField(default=5),
        ),
    ]
