import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyTypesComponent } from './examples/body-types/body-types.component';
import { BounceComponent } from './examples/bounce/bounce.component';
import { CollisionFilterComponent } from './examples/collision-filter/collision-filter.component';
import { CollisionsComponent } from './examples/collisions/collisions.component';
import { CompoundComponent } from './examples/compound/compound.component';
import { ContainerComponent } from './examples/container/container.component';
import { ConvexComponent } from './examples/convex/convex.component';
import { EventsComponent } from './examples/events/events.component';
import { FixedRotationComponent } from './examples/fixed-rotation/fixed-rotation.component';
import { FrictionComponent } from './examples/friction/friction.component';
import { ImpulseComponent } from './examples/impulse/impulse.component';
import { JengaComponent } from './examples/jenga/jenga.component';
import { PerformanceComponent } from './examples/performance/performance.component';
import { SleepComponent } from './examples/sleep/sleep.component';
import { ThreeJSComponent } from './examples/threejs/threejs.component';
import { TriggerComponent } from './examples/trigger/trigger.component';
import { TrimeshComponent } from './examples/trimesh/trimesh.component';
import { TweenComponent } from './examples/tween/tween.component';
import { VRComponent } from './examples/vr/vr.component';
import { WorkerComponent } from './examples/worker/worker.component';
import { HomeComponent } from './home.component';
import { TodoComponent } from './todo.component';


const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'threejs_cloth', component: TodoComponent },
  { path: 'threejs_fps', component: TodoComponent },
  { path: 'threejs_mousepick', component: TodoComponent },
  { path: 'threejs_voxel_fps', component: TodoComponent },
  { path: 'threejs', component: ThreeJSComponent },
  { path: 'worker', component: WorkerComponent },
  { path: 'body_types', component: BodyTypesComponent },
  { path: 'bounce', component: BounceComponent },
  { path: 'bunny', component: TodoComponent },
  { path: 'callbacks', component: TodoComponent },
  { path: 'collision_filter', component: CollisionFilterComponent },
  { path: 'collisions', component: CollisionsComponent },
  { path: 'compound', component: CompoundComponent },
  { path: 'constraints', component: TodoComponent },
  { path: 'container', component: ContainerComponent },
  { path: 'convex', component: ConvexComponent },
  { path: 'events', component: EventsComponent },
  { path: 'fixed_rotation', component: FixedRotationComponent },
  { path: 'friction', component: FrictionComponent },
  { path: 'heightfield', component: TodoComponent },
  { path: 'hinge', component: TodoComponent },
  { path: 'impulses', component: ImpulseComponent },
  { path: 'jenga', component: JengaComponent },
  { path: 'pile', component: TodoComponent },
  { path: 'performance', component: PerformanceComponent },
  { path: 'ragdoll', component: TodoComponent },
  { path: 'raycast_vehicle', component: TodoComponent },
  { path: 'rigid_vehicle', component: TodoComponent },
  { path: 'shapes', component: TodoComponent },
  { path: 'simple_friction', component: TodoComponent },
  { path: 'sleep', component: SleepComponent },
  { path: 'split_solver', component: TodoComponent },
  { path: 'spring', component: TodoComponent },
  { path: 'stacks', component: TodoComponent },
  { path: 'tear', component: TodoComponent },
  { path: 'trigger', component: TriggerComponent },
  { path: 'trimesh', component: TrimeshComponent },
  { path: 'tween', component: TweenComponent },
  { path: 'vr', component: VRComponent },
  { path: '**', redirectTo: '/' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
