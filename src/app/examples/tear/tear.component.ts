import { Component } from "@angular/core";

import { NgtTriple } from "@angular-three/core";

import { NgtPhysicBody, NgtPhysicBodyReturn } from "@angular-three/cannon/bodies";

class Link {
  constructor(public position: NgtTriple, public props: NgtPhysicBodyReturn) { }
}

@Component({
  templateUrl: './tear.component.html',
  providers: [NgtPhysicBody],
})
export class TearComponent {
  size = 0.45;
  mass = 1;

  iterations = 15;
  distance = this.size * 2 + 0.12;

  linkspheres: Array<Link> = [];
  constraints = []

  constructor(private physicBody: NgtPhysicBody) {
    //let lastBody
    for (let i = 0; i < this.iterations; i++) {
      const position = [0, (this.iterations - i) * this.distance - 9, 0] as NgtTriple;
      this.linkspheres.push(new Link(position, i == 0 ? this.firstLinkProps : this.linkProps));

      // Connect this body to the last one added
      // ** not supported by @angluar-three/cannon yet
      //if (lastBody) {
      //  const constraint = new CANNON.DistanceConstraint(sphereBody, lastBody, distance)
      //  world.addConstraint(constraint)
      //  constraints.push(constraint)
      //}

      //// Keep track of the last added body
      //lastBody = sphereBody
    }
  }

  // First body is static (mass = 0) to support the other bodies
  firstLinkProps = this.physicBody.useSphere(() => ({
      mass: 0,
      args: [this.size]
  }));

  linkProps = this.physicBody.useSphere(() => ({
      mass: 0,
      args: [this.size]
  }));

  throwBallProps = this.physicBody.useSphere(() => ({
      mass: 2,
      args: [this.size],
      velocity: [0, 0, -20]
  }));
}
