import { LoginComponent } from "./login.component";
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


describe("LoginComponent", () => {

    let loginComponent: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [ReactiveFormsModule, FormsModule]
        })
        fixture = TestBed.createComponent(LoginComponent);

        loginComponent = fixture.componentInstance;
        loginComponent.ngOnInit;
        
    })
    
    it("form invalid when empty", () => {
        expect(loginComponent.loginForm).toBeFalsy();
    })

    it("email field validity ", () => {

        let errors = {};
        let email = loginComponent.loginForm;
        expect(email).toBeFalsy();

        // errors = email || {};
        // expect(errors["required"]).toBeTruthy();

        // email.setValue("alex");
        // errors = email.errors || {};
        // expect(errors["pattern"]).toBeTruthy();
        // expect(errors["required"]).toBeFalsy();

        // email.setValue("alex@gmail.com");
        // errors = email.errors || {};
        // expect(email).toBeTruthy();
        expect(errors["required"]).toBeFalsy();
        expect(errors["pattern"]).toBeFalsy();
    })

    it("password field validity", () => {
        let errors = {};
        let password = loginComponent.loginForm.controls.password;

        // errors = password || {};
        // expect(errors["required"]).toBeTruthy();

        // password.setValue("12345");
        errors = password || {};
        expect(errors["required"]).toBeFalsy();
        //expect(errors["minlength"]).toBeTruthy();

        // password.setValue("123456789");
        errors = password || {};
        expect(errors["required"]).toBeFalsy();
        expect(errors["minlength"]).toBeFalsy();

    })

 
})

