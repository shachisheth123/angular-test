import { CourseComponent } from "./course.component";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe("coursecomponent", () => {

    let coursecomponent: CourseComponent;
    let fixture: ComponentFixture<CourseComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CourseComponent],
            imports: [ReactiveFormsModule, FormsModule]
        })
        fixture = TestBed.createComponent(CourseComponent);

        coursecomponent = fixture.componentInstance;
        coursecomponent.ngOnInit;
        
    })
})

