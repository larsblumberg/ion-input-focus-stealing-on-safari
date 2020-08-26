import React, { useState } from 'react'
import { IonApp, IonButton, IonContent, IonInput, IonItem, IonPage } from '@ionic/react'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Theme variables */
import './theme/variables.css'

const App = () => {
  const [value, setValue] = useState("I steal focus in Safari on macOS or iOS")
  return (<IonApp>
    <IonPage>
      <IonContent>
        <IonItem>
          <IonInput value={value} onIonChange={e => setValue(e.detail.value)} />
          <IonButton onClick={() => setValue("New value assigned me the focus")}>
            Assign new input value
          </IonButton>
        </IonItem>
      </IonContent>
    </IonPage>
  </IonApp>)
}

export default App
