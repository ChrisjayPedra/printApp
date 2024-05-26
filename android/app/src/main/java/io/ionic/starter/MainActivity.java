package io.ionic.starter;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.printchris.printPlugin;
import com.printchris.printPluginPlugin;

public class MainActivity extends BridgeActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {

    registerPlugin((printPluginPlugin.class));
    super.onCreate(savedInstanceState);
  }
}
