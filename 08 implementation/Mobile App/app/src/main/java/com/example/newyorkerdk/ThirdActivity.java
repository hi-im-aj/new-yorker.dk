package com.example.newyorkerdk;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.media.Image;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.ImageView;

import com.example.newyorkerdk.UI.BuildWallActivity;

import java.io.File;

public class ThirdActivity extends AppCompatActivity {


    ImageView i1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);


        setContentView(R.layout.activity_basket);
        i1 = (ImageView) findViewById(R.id.imageView2);
        Bundle bundle = getIntent().getExtras();
        if (bundle != null) {

            int resid = bundle.getInt("resId");
            i1.setImageResource(resid);
        }

    }


    public void backToWall(View view) {
        startActivity(new Intent(ThirdActivity.this,BuildWallActivity.class));
    }



    public void delete(View view) {

        i1 = (ImageView) findViewById(R.id.imageView2);
        i1.setEnabled(false);



    }
}
