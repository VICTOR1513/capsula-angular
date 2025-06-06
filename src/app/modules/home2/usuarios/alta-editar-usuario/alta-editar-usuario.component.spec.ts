import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaEditarUsuarioComponent } from './alta-editar-usuario.component';

describe('AltaEditarUsuarioComponent', () => {
  let component: AltaEditarUsuarioComponent;
  let fixture: ComponentFixture<AltaEditarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AltaEditarUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaEditarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
