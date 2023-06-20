# Generated by Django 4.2.2 on 2023-06-20 21:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_remove_blogpost_id_blogpost_pin_alter_blogpost_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='blogpost',
            name='id',
            field=models.BigAutoField(auto_created=True, default=2, primary_key=True, serialize=False, verbose_name='ID'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='blogpost',
            name='name',
            field=models.CharField(default='', max_length=80, unique=True),
        ),
    ]
