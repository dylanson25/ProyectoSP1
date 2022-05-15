<CustomButton
        title=" Prueba"
        onPress={() => {
          cedulaPrueba('0023456', 'A1')
            .then(console.log)
            .catch(console.log);
        }}
        bg="#FFDEDC"
      />