package io.ionic.starter;
import com.printchris.printPlugin.*;
import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.printchris.printPlugin;

public class MainActivity extends BridgeActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {

    registerPlugin((printPlugin.class));
    super.onCreate(savedInstanceState);
  }
}
