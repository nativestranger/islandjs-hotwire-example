import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "container", "post" ]

  connect() {
    console.log("Posts list controller connected")
  }

  postTargetConnected(element) {
    element.style.opacity = "0"
    element.style.transform = "translateY(-10px)"
    
    requestAnimationFrame(() => {
      element.style.transition = "opacity 0.3s ease-out, transform 0.3s ease-out"
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
    })
  }
}