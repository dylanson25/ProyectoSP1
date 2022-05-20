mAuth.createUserWithEmailAndPassword(email, password) .addOnCompleteListener(this, new OnCompleteListener<AuthResult>() 
{ @Override public void onComplete(@NonNull Task<AuthResult> task) { Log.d("TAG", "createUserWithEmail:onComplete:" + task.isSuccessful()); 
// If sign in fails, display a message to the user. If sign in succeeds 
// the auth state listener will be notified and logic to handle the 
// signed in user can be handled in the listener. 
if (!task.isSuccessful()) { 
    // Show the message task.
    getException() } else { 
        // successfully account created 
        // now the AuthStateListener runs the onAuthStateChanged callback 
    } 
    // ... 
    } }); 