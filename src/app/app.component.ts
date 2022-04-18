import { Component } from "@angular/core";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  examples = [
    'bounce',
    'conveyor',
    'conditional',
    'collision_filter',
    'collisions',
    'compound',
    'constraints',
    'container',
    'events',
    'fps',
    'fixed_rotation',
    'friction',
    'hinge',
    'impulses',
    'jenga',
    'mousepick',
    'performance',
    'pile',
    'stacks',
    'threejs',
    'trigger',
    'trimesh',
    'tween',
    'worker',
  ]

  almost = [
    'heightfield',
    'body_types',
    'convex',
    'sleep',
  ]

  feature = [
    'ragdoll',
    'rigid_vehicle',
    'raycast_vehicle',
    'cloth',
    'spring',
    'tear',
    'callbacks',
  ]
}
