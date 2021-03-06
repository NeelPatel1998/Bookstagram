# Generated by Django 3.1.5 on 2021-03-11 18:30

from django.db import migrations, models
import django.db.models.deletion
import mptt.fields


class Migration(migrations.Migration):

    dependencies = [
        ('SocialBookApp', '0004_auto_20210310_0058'),
    ]

    operations = [
        migrations.CreateModel(
            name='BookTree',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lft', models.PositiveIntegerField(editable=False)),
                ('rght', models.PositiveIntegerField(editable=False)),
                ('tree_id', models.PositiveIntegerField(db_index=True, editable=False)),
                ('level', models.PositiveIntegerField(editable=False)),
                ('Book', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='SocialBookApp.book')),
                ('parent', mptt.fields.TreeForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='children', to='SocialBookApp.app_user')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
