import {
  Component,
  AfterViewInit,
  OnDestroy,
  Inject,
  Renderer2,
  Input,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-zeffy-embed',
  templateUrl: './zeffy-embed.component.html',
})
export class ZeffyEmbedComponent implements AfterViewInit, OnDestroy {
  @Input() formPath: string = '/embed/donation-form/donate-to-iapa';

  scriptFailed = false;
  safeFallbackUrl!: SafeResourceUrl;
  private scriptElement?: HTMLScriptElement;

  constructor(
    private renderer: Renderer2,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngAfterViewInit(): void {
    const fullUrl = `https://www.zeffy.com${this.formPath}`;

    this.safeFallbackUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(fullUrl);

    this.loadZeffyScript();
  }

  private loadZeffyScript(): void {
    // Remove existing script if navigating between routes in an SPA
    const existingScript = this.document.getElementById('zeffy-embed-script');
    if (existingScript) {
      existingScript.remove();
    }

    const script = this.renderer.createElement('script');
    script.id = 'zeffy-embed-script';
    script.src = 'https://www.zeffy.com/embed/v2/zeffy-embed.js';
    script.async = true;

    script.onerror = () => {
      this.scriptFailed = true;
    };

    this.renderer.appendChild(this.document.body, script);
    this.scriptElement = script;
  }

  ngOnDestroy(): void {
    if (this.scriptElement) {
      this.scriptElement.remove();
    }
  }
}
