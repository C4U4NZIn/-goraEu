//Projeto Ágora_web.v01
//para não se esquecer:
//componente de delete:
 {isOpenDelete && (
     <>
     {/**Componente de Exclude */}

     <CardUserContainerExclude $width={29.25} $height={29}>
     <form
   onSubmit={handleSubmit(handleSubmitPassword)}
   >
<TopUserContainerTitle>
   <h2>Excluir Conta</h2>
  
</TopUserContainerTitle>
{/**Componente de Informações */}
<CardUserInfoExclude
style={{
 marginTop:'2rem',
 gap:'4rem'
}}
>
<ContainerInfoFieldExclude>
<Label
style={{
 fontSize:'22px',
 marginLeft:'2.2rem',
 alignSelf:'flex-start'
}}
>Insira a senha</Label>
<InputUsuarioPage
{...register('password')}
/>
{errors.password && (<TextError>{errors.password.message}</TextError>)}
</ContainerInfoFieldExclude>
<ContainerInfoFieldExclude
style={{
 display:'flex',
 flexDirection:'column',
 gap:'0.25rem',
 height:'5rem'
}}
>
 {/** O onKeyPress está com dias contados
  * verifica e apenas permite o usuario 
  * digitar números
  * Componentizar esse OtpInput depois
  */}
 <Label
style={{
 fontSize:'20px',
 alignSelf:'center'
}}
>Insira o código enviado no E-mail</Label>
  <OtpInput
     value={otp}
     onChange={setOtp}
     numInputs={4}
     renderInput={(props) =>
     <InputStyles
      {...props}
      onKeyPress={(event)=>{
       if(!/[0-9]/.test(event.key)){
        event.preventDefault();
       }
      }}
     />}
     containerStyle={{
       width:'60%',
       height:'100%',
       borderRadius:'none',
       border:'none',
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       gap:'10px'
     }}
     inputStyle={{
       width:'15%',
       height:'80%',
       border:'1px solid rgba(242, 105, 33, 1)',
       fontSize:'40px',
       backgroundColor:'rgba(232, 218, 218, 1)',
       borderRadius:'10px',
       WebkitAppearance:'none',
       margin:'0'
     }}
     inputType="text"
   />
   <p
   style={{
     margin:0,
     padding:0,
     border:'none',
     borderRadius:'none',
     color:'rgba(242, 105, 33, 1)'
   }}
   onClick={resendEmailToUser}
   >Reenviar código</p>
</ContainerInfoFieldExclude>
{/**Adicionar um form nesse container */}
{/**Foram utilizados vários inline aqui, mas nada que prejudique legibilidade */}
<ContainerButtons
style={{
 position:'unset',
 width:'80%',
 marginTop:'-2rem',
 padding:0,
 gap:'2rem',
 zIndex:0,
 marginLeft:'5%'

}}
>
 <ButtonComponent
 onClick={fecharDelete}
   style={{
     borderRadius:'15px'
   }}
   $width={10}
   $height={2}
   $borderRadius={0}
   $backgroundColor="rgba(242, 105, 33, 1)"
 ><p
 style={{
   color:'#fff'
 }}
 >Cancelar</p></ButtonComponent>
 <ButtonComponent
 type="submit"
 disabled={!isActivePasswordField || !isVoidOtpField}
     style={{
         borderRadius:'15px'
       }}
     $width={10}
     $height={2}
     $borderRadius={0}
     $backgroundColor="rgba(242, 105, 33, 1)"
 ><p
 style={{
   color:"#fff"
 }}
 >Excluir</p></ButtonComponent>
</ContainerButtons>
</CardUserInfoExclude>
     </form>
     </CardUserContainerExclude> 

     </>
     )}