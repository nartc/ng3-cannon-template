import { Component } from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  examples = [
    'bounce',
    'collision_filter',
    'collisions',
    'compound',
    'container',
    'events',
    'fixed_rotation',
    'friction',
    'impulses',
    'jenga',
    'threejs',
    'trigger',
    'worker',
  ]

  almost = [
    'sleep',
    'trimesh',
  ]

  todo = [
    'threejs_cloth',
    'threejs_fps',
    'threejs_mousepick',
    'threejs_voxel_fps',
    'body_types',
    'bunny',
    'callbacks',
    'constraints',
    'convex',
    'heightfield',
    'hinge',
    'pile',
    'performance',
    'ragdoll',
    'raycast_vehicle',
    'rigid_vehicle',
    'shapes',
    'simple_friction',
    'sph',
    'split_solver',
    'spring',
    'stacks',
    'tear',
    'tween',
  ]
}
