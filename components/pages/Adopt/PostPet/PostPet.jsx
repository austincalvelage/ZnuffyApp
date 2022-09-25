import Card from '../../../UI/Card';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonItemDivider,
  IonToggle,
  IonRadio,
  IonCheckbox,
  IonSegment,
  IonSegmentButton,
  IonRange,
  IonButton,
} from '@ionic/react';
import classNames from 'classnames';
import React, { useState } from 'react';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner';

import FilterCarrousel from '../UI/FilterCarrousel';
import PetCard from '../UI/PetCard';

const PostPet = () => {
  const [text, setText] = useState();
  // const [number, setNumber] = useState();
  const [type, setType] = useState();
  const [name, setName] = useState();
  const [location, setLocation] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [breed, setBreed] = useState();
  // Characteristics
  const [groom, setGroom] = useState();
  const [dogFriendly, setdogFriendly] = useState();
  const [catFriednly, setCatFriednly] = useState();
  const [houseTrained, setHouseTrained] = useState();
  const [leashTrained, setLeashTrained] = useState();
  const [goodWithKids, setGoodWithKids] = useState();
  const [energyLevel, setEnergyLevel] = useState();
  const [vocality, setVocality] = useState();
  const [story, setStory] = useState();

  const openScanner = async () => {
    const data = await BarcodeScanner.scan();
    console.log(`Barcode data: ${data.text}`);
  };

  const publisPetHandler = async () => {
    debugger;
    console.log(name);
    const data = await fetch('https://znuffy.herokuapp.com/api/animal/postAnimals', {
      method: 'POST',
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({
        type: `${type}`,
        name: `${name}`,
        location: `${location}`,
        image:
          'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
        age: `${age}`,
        genre: `${gender}`,
        breed: `${breed}`,
        characteristics: {
          groom: `${groom}`,
          dogFriendly: `${dogFriendly}`,
          catFriendly: `${catFriednly}`,
          houseTrained: `${houseTrained}`,
          leashTrained: `${leashTrained}`,
          goodWithKids: `${goodWithKids}`,
          energyLevel: `${energyLevel}`,
          vocalityLevel: `${vocality}`,
        },
        medicalInfo: {
          vaccinated: 'true',
          neutured: 'true',
          shortHair: 'true',
          allergyFriendly: 'true',
          diaryRestrictions: 'false',
          needsMedication: 'false',
          disability: 'false',
          spayed: 'false',
        },
        story: `${story}`,
        poster: {
          _id: '62c05b6fe854ed618fd2a607',
          number: '+595994880781',
          type: 'rescuer',
        },
      }),
    });

    const resp = data.json();
    console.log(resp);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Post a Pet</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <Card>
          <IonList>
            {/* <IonSegment>
              <IonSegmentButton value="Dog"></IonSegmentButton>
              <IonSegmentButton value="Cat"></IonSegmentButton>
            </IonSegment> */}
            <IonItemDivider>Animal</IonItemDivider>
            <IonSegment onIonChange={e => setType(e.detail.value)}>
              <IonSegmentButton value="Dogs">
                <IonLabel>Dogs</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="Cats">
                <IonLabel>Cats</IonLabel>
              </IonSegmentButton>
            </IonSegment>

            {/* <IonItemDivider>Name</IonItemDivider> */}
            {/* <IonItem>
              <IonInput
                value={text}
                placeholder="Enter Input"
                onIonChange={e => setText(e.detail.value)}
              ></IonInput>
            </IonItem> */}

            <IonItem onIonChange={e => setName(e.detail.value)}>
              <IonLabel position="floating">Name</IonLabel>
              <IonInput></IonInput>
            </IonItem>

            <IonItemDivider></IonItemDivider>
            {/* <IonItem>
              <IonInput
                value={text}
                placeholder="Enter Input"
                onIonChange={e => setText(!e.detail.value)}
                clearInput
              ></IonInput>
            </IonItem> */}

            <IonItem onIonChange={e => setLocation(e.detail.value)}>
              <IonLabel position="floating">location</IonLabel>
              <IonInput></IonInput>
            </IonItem>
            {/* <IonItemDivider></IonItemDivider>
            <IonItem>
              <IonLabel position="floating">location</IonLabel>
              <IonInput></IonInput>
            </IonItem> */}
            <IonItemDivider></IonItemDivider>
            <IonItem onIonChange={e => setAge(e.target.value)}>
              <IonLabel position="floating">age</IonLabel>
              <IonInput type="number"></IonInput>
            </IonItem>
            <IonItemDivider></IonItemDivider>
            {/* <IonItem>
              <IonLabel position="floating">location</IonLabel>
              <IonInput value={text}></IonInput>
            </IonItem>
            <IonItemDivider></IonItemDivider> */}
            <IonItemDivider>Gender</IonItemDivider>
            <IonSegment onIonChange={e => setGender(e.detail.value)}>
              <IonSegmentButton value="Male">
                <IonLabel>Male</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="Female">
                <IonLabel>Female</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="unrecognized">
                <IonLabel>I dont know</IonLabel>
              </IonSegmentButton>
            </IonSegment>
            <IonItemDivider></IonItemDivider>
            <IonItem onIonChange={e => setBreed(e.detail.value)}>
              <IonLabel position="floating">Breed</IonLabel>
              <IonInput></IonInput>
            </IonItem>
            <IonItemDivider></IonItemDivider>
            <IonItemDivider>Characteristics</IonItemDivider>
            <IonItem onIonChange={e => setGroom(e.detail.value)}>
              {/* <IonInput value={text}></IonInput> */}
              <IonLabel>groom</IonLabel>
              <IonRange
                min={0}
                max={10}
                // defaultValue={5}
                pin={true}
                ticks={true}
                snaps={true}
                // onIonChange={e => console.log(e.detail.value)}
              ></IonRange>
            </IonItem>
            <IonItem onIonChange={e => setdogFriendly(e.detail.value)}>
              <IonLabel>dogFriendly</IonLabel>
              <IonRange
                min={0}
                max={10}
                // value={5}
                pin={true}
                ticks={true}
                snaps={true}
                // onIonChange={e => console.log(e.detail.value)}
              ></IonRange>
            </IonItem>
            <IonItem onIonChange={e => setCatFriednly(e.detail.value)}>
              <IonLabel>catFriendly</IonLabel>
              <IonRange
                min={0}
                max={10}
                // value={5}
                pin={true}
                ticks={true}
                snaps={true}
                // onIonChange={e => console.log(e.detail.value)}
              ></IonRange>
            </IonItem>
            <IonItem onIonChange={e => setHouseTrained(e.detail.value)}>
              <IonLabel>houseTrained</IonLabel>
              <IonRange
                min={0}
                max={10}
                // value={5}
                pin={true}
                ticks={true}
                snaps={true}
                // onIonChange={e => console.log(e.detail.value)}
              ></IonRange>
            </IonItem>
            <IonItem onIonChange={e => setLeashTrained(e.detail.value)}>
              <IonLabel>leashTrained</IonLabel>
              <IonRange
                min={0}
                max={10}
                // value={5}
                pin={true}
                ticks={true}
                snaps={true}
                // onIonChange={e => console.log(e.detail.value)}
              ></IonRange>
            </IonItem>
            <IonItem onIonChange={e => setGoodWithKids(e.detail.value)}>
              <IonLabel>goodWithKids</IonLabel>
              <IonRange
                min={0}
                max={10}
                // value={5}
                pin={true}
                ticks={true}
                snaps={true}
                // onIonChange={e => console.log(e.detail.value)}
              ></IonRange>
            </IonItem>
            <IonItem onIonChange={e => setEnergyLevel(e.detail.value)}>
              <IonLabel>energyLevel</IonLabel>
              <IonRange
                min={0}
                max={10}
                // value={5}
                pin={true}
                ticks={true}
                snaps={true}
                // onIonChange={e => console.log(e.detail.value)}
              ></IonRange>
            </IonItem>
            <IonItem onIonChange={e => setVocality(e.detail.value)}>
              <IonLabel>vocalityLevel</IonLabel>
              <IonRange
                min={0}
                max={10}
                // value={5}
                pin={true}
                ticks={true}
                snaps={true}
                // onIonChange={e => console.log(e.detail.value)}
              ></IonRange>
            </IonItem>

            {/* <IonItemDivider>goodWithKids</IonItemDivider>
            <IonItem>
              <IonInput
                type="number"
                value={number}
                placeholder="Enter Number"
                onIonChange={e => setNumber(parseInt(!e.detail.value, 10))}
              ></IonInput>
            </IonItem> */}

            {/* <IonItemDivider>Disabled input</IonItemDivider>
            <IonItem>
              <IonInput value={text} disabled></IonInput>
            </IonItem>

            <IonItemDivider>Readonly input</IonItemDivider>
            <IonItem>
              <IonInput value={text} readonly></IonInput>
            </IonItem>

            <IonItemDivider>Inputs with labels</IonItemDivider>

            <IonItem>
              <IonLabel>Default Label</IonLabel>
              <IonInput></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Floating Label</IonLabel>
              <IonInput value={text}></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="fixed">Fixed Label</IonLabel>
              <IonInput value={text}></IonInput>
            </IonItem> */}

            <IonItem onIonChange={e => setStory(e.detail.value)}>
              <IonLabel position="stacked">Story</IonLabel>
              <IonInput default=""></IonInput>
            </IonItem>
            {/* </IonList>
          <IonList>
            <IonItem>
              <IonLabel>Input</IonLabel>
              <IonInput></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>Toggle</IonLabel>
              <IonToggle slot="end"></IonToggle>
            </IonItem>
            <IonItem>
              <IonLabel>Radio</IonLabel>
              <IonRadio slot="end"></IonRadio>
            </IonItem>
            <IonItem>
              <IonLabel>Checkbox</IonLabel>
              <IonCheckbox slot="start" />
            </IonItem> */}
            <IonButton onClick={openScanner}>Scan barcode</IonButton>
          </IonList>
          <div className="flex justify-center p-5">
            <IonButton onClick={publisPetHandler}>Publish</IonButton>
          </div>
        </Card>
      </IonContent>
    </IonPage>
  );
};

export default PostPet;
