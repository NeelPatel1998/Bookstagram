# Generated by Django 3.1.5 on 2021-03-17 10:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('SocialBookApp', '0022_auto_20210317_1542'),
    ]

    operations = [
        migrations.AddField(
            model_name='commentsnewsfeed',
            name='Book',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='book', to='SocialBookApp.book'),
            preserve_default=False,
        ),
    ]