import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { setTimeout } from "timer";
import { StackLayout } from 'ui/layouts/stack-layout';
import { Button } from 'ui/button';
import { Page } from "ui/page";
import { ScrollEventData } from "ui/scroll-view";
import { AnimationCurve } from "ui/enums";
import { Animation } from "ui/animation";
import { Input, ChangeDetectionStrategy } from '@angular/core';


@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ['login.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginComponent implements OnInit {
    email: string;
    password: string;

    constructor(page: Page) {
        page.actionBarHidden = true;
    }

    ngOnInit(): void {

    }

    onLoginWithSocialProviderButtonTap(): void {

    }
    onloginButtonTap(): void {

    }

    onSigninButtonTap(): void {
        const email = this.email;
        const password = this.password;


    }
    onForgotPasswordTap(): void {

    }
}
