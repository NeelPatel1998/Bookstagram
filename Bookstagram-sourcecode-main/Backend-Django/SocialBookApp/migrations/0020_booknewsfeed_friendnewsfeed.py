# Generated by Django 3.1.5 on 2021-03-12 15:27

from django.db import migrations, models
import django.db.models.deletion
import unixtimestampfield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('SocialBookApp', '0019_booktreeconnect'),
    ]

    operations = [
        migrations.CreateModel(
            name='FriendNewsFeed',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comments', models.TextField()),
                ('publist', unixtimestampfield.fields.UnixTimeStampField(auto_now=True, null=True)),
                ('friend', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='friendfriend', to='SocialBookApp.app_user')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='friendyou', to='SocialBookApp.app_user')),
            ],
        ),
        migrations.CreateModel(
            name='BookNewsFeed',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comments', models.TextField()),
                ('publist', unixtimestampfield.fields.UnixTimeStampField(auto_now=True, null=True)),
                ('Buyer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='bookBuyer', to='SocialBookApp.app_user')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='youself', to='SocialBookApp.app_user')),
            ],
        ),
    ]
